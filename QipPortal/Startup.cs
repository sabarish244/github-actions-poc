using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Logging;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;
using QipPortal.DAL;
using QipPortal.Models;
using QipPortal.Models.DB;
using QipPortal.Services;
using System;
using System.Threading.Tasks;
using System.Security.Principal;
using System.Security.Claims;

namespace QipPortal
{
    public class Startup 
    {
        //public Startup(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true); 

            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();

            IdentityModelEventSource.ShowPII = true;

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDistributedMemoryCache(); 

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(15);
                options.Cookie.HttpOnly = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                options.Cookie.IsEssential = true;
            });

            services.AddDbContext<AuthGatewayDevContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // Identity Services
            // Replaced for Azure B2C
            // Configuration to sign-in users with Azure AD B2C

            services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApp(Configuration.GetSection("AzureB2C"));

            services.AddAuthorization(options =>
            {
                // By default, all incoming requests will be authorized according to 
                // the default policy
                options.FallbackPolicy = options.DefaultPolicy;
            });

            services.AddRazorPages(options => {
                options.Conventions.AllowAnonymousToPage("/Index");
            })
                .AddMvcOptions(options => { })
                .AddMicrosoftIdentityUI();



            // Identity Type           
            //services.AddIdentity<Users, Roles>(x =>
            //{
            //    x.Lockout = new LockoutOptions()
            //    {
            //        AllowedForNewUsers = true,
            //        DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15),
            //        MaxFailedAccessAttempts = 5
            //    };
            //}).AddDefaultTokenProviders();

            services.AddControllersWithViews()
                .AddMicrosoftIdentityUI();

            services.AddOptions();            

            // Identity Services
            services.AddTransient<IUserStore<Users>, UserStore>();
            services.AddTransient<IRoleStore<Roles>, RoleStore>();
            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.HttpOnly = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                options.LoginPath = "/Account/Login";
                options.LogoutPath = "/Account/Logout";
                options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
            });

            services.AddTransient(typeof(ProjectStore));
            services.AddTransient(typeof(UsersListStore));

            services.AddSingleton(typeof(ListItemManager));

            services.AddScoped<DAL.Strategies.IResources, DAL.ResourceStore>();

            services.Configure<ConfigSettings>(Configuration.GetSection("Settings"));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddCors();


            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Swgger Demo api",
                    Description = "Demo Api for the Showing Swgger Api",
                    Version = "v1"
                });
            });
            services.AddApplicationInsightsTelemetry();

            // Added for SSO Integration by JMeek - 31-Mar-2022@1300
            services.AddControllers();
        }

            // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseHttpsRedirection();

            app.UseCors(builder => builder.AllowAnyOrigin());

            app.UseStaticFiles();

            app.UseCookiePolicy();

            //app.UseCookieAuthentication();
            
            //app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            //{
            //    ClientId = Configuration["AzureAd:ClientId"],
            //    Authority = string.Format(Configuration["AzureAd:AadInstance"], Configuration["AzureAd:TenantId"]),
            //    CallbackPath = Configuration["AzureAd:AuthCallback"]
            //});


            app.UseSession();

            // Added to support Azure B2C
            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
                await next();
            });

            // Replaced for Azure B2C
            //app.UseMvc(routes =>
            //{
            //   routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

            // Removed for B2C
            app.UseEndpoints(endpoints => {
                endpoints.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            //Added for B2C
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "swgger Demo API");
            });
        }
    }
}
