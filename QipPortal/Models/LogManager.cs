//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.Text;

namespace QipPortal.Models
{
    /// <summary>
    /// This class provides utility function to write log statements and also stores the log
    /// level for the current user.
    /// All logging should be done directly through this class.
    /// </summary>
    public class LogManager  
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Constants

        /// <summary>
        /// This is the session key used to store the user's log level.
        /// </summary>
        public const string LogLevelSessionKey = "LogLevelSessionKey";

        #endregion

        /* ************************************************************** */
        #region Enumerations

        /// <summary>
        /// This enumeration contains the logging levels available.
        /// </summary>
        public enum LogLevel : Int32
        {
            Debug = 4,
            Information = 3,
            Warning = 2,
            Error = 1,
            Critical = 0,
        }

        #endregion

        /* ************************************************************** */
        #region Member Variables

        /// <summary>
        /// Used to write all logs.
        /// </summary>
        private ILogger m_log;

        #endregion

        /* ************************************************************** */
        #region Properties

        /// <summary>
        /// The log level is for the current user.
        /// </summary>
        public LogLevel CurrentLogLevel { get; private set; }

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        /// <summary>
        /// Construct an instance of the log manager specifically for the current user.
        /// </summary>
        /// <param name="logFactory">
        /// Used to create the app insights logger.
        /// </param>
        public LogManager(ILoggerFactory logFactory)
        {
            // Create the logger
            this.m_log = logFactory.CreateLogger("X Platform");

            /* Set the default log level, note that the user's log level will be obtained
             * from the context in the the LogFunction start call.
             */
            this.CurrentLogLevel = LogLevel.Error;
        }

        #endregion

        /* ************************************************************** */
        #region Operations

        /// <summary>
        /// This method is used for getting stack detalis
        /// </summary>
        /// <returns>
        /// The current stack trace as a string.
        /// </returns>
        public string GetStackTrace()
        {
            // Get all of the frames in the stack trace
            var st = new StackTrace(true);
            var frames = st.GetFrames();
            var traceString = new StringBuilder();

            // Enumerate the frames and write details of each including the file, function and line number
            int count = 1;
            foreach (var frame in frames)
            {
                if (frame.GetFileLineNumber() < 1)
                    continue;
                if (count == 2)
                {
                    traceString.Append("File: " + frame.GetFileName());
                    traceString.Append(", Method:" + frame.GetMethod().Name);
                    traceString.Append(", LineNumber: " + frame.GetFileLineNumber());
                    traceString.Append("  -->  ");
                    break;
                }
                count++;
            }

            return traceString.ToString();
        }

        /// <summary>
        /// This function will initialise the current user's log level from the session.
        /// </summary>
        /// <param name="context">
        /// The Http Context.
        /// </param>
        private void InitialiseCurrentLogLevel(HttpContext context)
        {
            // Only continue if the context is valid
            if(context != null)
            {
                // Get the current log level from the session
                Int32? currentLogLevel = context.Session.GetInt32(LogLevelSessionKey);

                // If the user doesn't have a log level then default it to error
                this.CurrentLogLevel = (currentLogLevel.HasValue) ? (LogLevel)currentLogLevel : LogLevel.Error;
            }            
        }

        /// <summary>
        /// Log the end of the function including the total time spent in the function.
        /// This should be called at the end of any function using LogFunctionStart.
        /// Note that all logs are written at information level.
        /// </summary>
        /// <param name="functionName">
        /// The name of the function, should be the same as what's passed into LogFunctionStart.
        /// </param>
        /// <param name="startTime">
        /// The token returned from the LogFunctionStart that allows the time to be calculated.
        /// </param>
        public void LogFunctionEnd(string functionName, long startTime)
        {
            // Only continue if we are logging at infomration or higher
            if (this.CurrentLogLevel >= LogLevel.Information)
            {
                // Check parameters
                if (functionName == null)
                {
                    throw new ArgumentNullException("functionName");
                }
                if (startTime <= 0)
                {
                    throw new ArgumentOutOfRangeException("startTime");
                }

                // Work out the time difference
                long totalTicks = (DateTime.Now.Ticks - startTime);

                // Write an opening log statement
                this.WriteLog(LogLevel.Information, "Function {0} finished, total time = {1}", functionName, totalTicks);
            }
        }

        /// <summary>
        /// This function should be called for all public apis or other key functions and will write a standard
        /// logging message at the entry point to the function.
        /// The function LogFunctionEnd should be called when the function terminates, preferrably in a finally
        /// construct.
        /// Note that this logging will be performed at information level.
        /// As this will be the first logging function called it will also recover the user's log level from the
        /// HTTP session.
        /// </summary>
        /// <param name="context">
        /// The HTTP context is required to access the user's log level.
        /// </param>
        /// <param name="functionName">
        /// The name of the function.
        /// </param>
        /// <returns>
        /// A token to pass to LogFunctionEnd that will calculate the total time spent in the function.
        /// </returns>
        public long LogFunctionStart(HttpContext context, string functionName)
        {
            // Initialise the user's log level from the session
            this.InitialiseCurrentLogLevel(context);

            // Only continue if we are logging at infomration or higher
            if (this.CurrentLogLevel >= LogLevel.Information)
            {
                // Check parameters
                if (functionName == null)
                {
                    throw new ArgumentNullException("functionName");
                }

                // Write an opening log statement
                this.WriteLog(LogLevel.Information, "Function {0} started", functionName);
            }

            // Return the number of ticks representing the current time
            return DateTime.Now.Ticks;
        }

        /// <summary>
        /// This function will set the log level for the current user and should be called whenever the log
        /// level is changed in the UI.
        /// </summary>
        /// <param name="context">
        /// The HTTP context is required to access the user's log level.
        /// </param>
        /// <param name="level">
        /// The new level to set.
        /// </param>
        public void SetLogLevel(HttpContext context, LogLevel level)
        {
            // Save the data in the session
            context.Session.SetInt32(LogLevelSessionKey, (Int32)level);

            // Save in the member variable
            this.CurrentLogLevel = level;
        }

        /// <summary>
        /// This function will write an exception to the log at Error level including the inner exception and
        /// the stack trace.
        /// </summary>
        /// <param name="ex">
        /// The exception to log.
        /// </param>
        public void WriteExceptionLog(Exception ex)
        {
            // Only continue if we are working at error level
            if (this.CurrentLogLevel >= LogLevel.Error)
            {
                // Get the message from the inner exception
                string innerMessage = (ex.InnerException != null) ? ex.InnerException.Message : "No inner exception";

                // Format the exception log message
                string exceptionMessage = string.Format("Exception message: {0}{3}Inner exception: {1}{3}Stack Trace: {2}", ex.Message, innerMessage, ex.StackTrace, Environment.NewLine);

                // Log this as an error log
                this.WriteLog(LogLevel.Error, exceptionMessage);
            }
        }

        /// <summary>
        /// This functionality should already be provided by the logging framework but just in case
        /// it isn't for react here is an example.
        /// </summary>
        /// <param name="logLevel">
        /// The level to log at.
        /// </param>
        /// <param name="message">
        /// The logging message.
        /// </param>
        public void WriteLog(LogLevel logLevel, string message)
        {
            this.WriteLog(logLevel, message, null);
        }

        /// <summary>
		/// This functionality should already be provided by the logging framework but just in case
		/// it isn't for react here is an example.
		/// </summary>
		/// <param name="logLevel">
		/// The level to log at.
		/// </param>
		/// <param name="message">
		/// The logging message.
		/// </param>
        /// <param name="args">
        /// Any arguments needing to be passed into the log message.
        /// </param>
		public void WriteLog(LogLevel logLevel, string message, params object[] args)
        {
            // Only continue if we the current log level matches or exceeds the desired level
            if (this.CurrentLogLevel >= logLevel)
            {
                // Check parameters
                if (message == null)
                {
                    throw new ArgumentNullException("message");
                }

                /* Write the log at the correct level, note that the logging framework provides
                 * different functions to write at the different levels hence this switch statement.
                 */
                switch(logLevel)
                {
                    case LogLevel.Critical:
                        m_log.LogCritical(message, args);
                        break;

                    case LogLevel.Error:
                        m_log.LogError(message, args);
                        break;

                    case LogLevel.Warning:
                        m_log.LogWarning(message, args);
                        break;

                    case LogLevel.Information:
                        m_log.LogInformation(message, args);
                        break;

                    case LogLevel.Debug:

                        // Aside from the message log the stack trace as well
                        string stackTrace = this.GetStackTrace();

                        // Format the original log message
                        string debugMessage = string.Format(message, args);
                                                
                        // Write the log appending the stack trace to the original message
                        m_log.LogDebug("{0}, stack: {1}", debugMessage, stackTrace);
                        break;
                }
            }            
        }

        #endregion
    }
}
