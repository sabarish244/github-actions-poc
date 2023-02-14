//--------------------------------------------------------------------------------
//    This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------

using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace QipPortal.Models.DB
{
    public partial class AuthGatewayDevContext : DbContext
    {
        public IConfiguration Configuration { get; set; }
        public AuthGatewayDevContext()
        {
        }

        public AuthGatewayDevContext(DbContextOptions<AuthGatewayDevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<OrganisationVerticals> OrganisationVerticals { get; set; }
        public virtual DbSet<Organisations> Organisations { get; set; }
        public virtual DbSet<Permissions> Permissions { get; set; }
        public virtual DbSet<PowerBiReportType> PowerBiReportType { get; set; }
        public virtual DbSet<PowerBiReports> PowerBiReports { get; set; }
        public virtual DbSet<Projects> Projects { get; set; }
        public virtual DbSet<ResourceTypes> ResourceTypes { get; set; }
        public virtual DbSet<Resources> Resources { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<SurveyTypes> SurveyTypes { get; set; }
        public virtual DbSet<Surveys> Surveys { get; set; }
        public virtual DbSet<UserAdmins> UserAdmins { get; set; }
        public virtual DbSet<UserLoginAudit> UserLoginAudit { get; set; }
        public virtual DbSet<UserProjects> UserProjects { get; set; }
        public virtual DbSet<UserTypes> UserTypes { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<ComplianceLog> ComplianceLog { get; set; }
        public virtual DbSet<UserFavourites> UserFavourites { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<OrganisationVerticals>(entity =>
            {
                entity.HasKey(e => e.OrganisationVerticalId)
                    .HasName("PK_OrganisationVerticals_1");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Organisations>(entity =>
            {
                entity.HasKey(e => e.OrganisationId)
                    .HasName("PK_Organisations_1");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.OrganisationVertical)
                    .WithMany(p => p.Organisations)
                    .HasForeignKey(d => d.OrganisationVerticalId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Organisations_OrganisationVerticals");
            });

            modelBuilder.Entity<Permissions>(entity =>
            {
                entity.HasKey(e => e.PermissionId);

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.Permissions)
                    .HasForeignKey(d => d.ResourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Permissions_Resources");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Permissions)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Permissions_Roles");

                entity.HasOne(d => d.UserProject)
                    .WithMany(p => p.Permissions)
                    .HasForeignKey(d => d.UserProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Permissions_UserProjects");
            });

            modelBuilder.Entity<PowerBiReportType>(entity =>
            {
                entity.HasKey(e => e.ReportTypeId);

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.FontAwesomeIcon).HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Url).HasMaxLength(50);
            });

            modelBuilder.Entity<PowerBiReports>(entity =>
            {
                entity.HasKey(e => e.ResourceId)
                    .HasName("PK_PowerBiReports_1");

                entity.Property(e => e.ResourceId).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.ReportType)
                    .WithMany(p => p.PowerBiReports)
                    .HasForeignKey(d => d.ReportTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PowerBiReports_PowerBiReportType1");

                entity.HasOne(d => d.Resource)
                    .WithOne(p => p.PowerBiReports)
                    .HasForeignKey<PowerBiReports>(d => d.ResourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PowerBiReports_Resources");
            });

            modelBuilder.Entity<Projects>(entity =>
            {
                entity.HasKey(e => e.ProjectId);

                entity.Property(e => e.ChangePointId).HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Organisation)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.OrganisationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Projects_Organisations");
            });

            modelBuilder.Entity<ResourceTypes>(entity =>
            {
                entity.HasKey(e => e.ResourceTypeId);

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Resources>(entity =>
            {
                entity.HasKey(e => e.ResourceId);

                entity.HasOne(d => d.ResourceType)
                    .WithMany(p => p.Resources)
                    .HasForeignKey(d => d.ResourceTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Resources_ResourceTypes");
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasKey(e => e.RoleId);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<SurveyTypes>(entity =>
            {
                entity.HasKey(e => e.SurveyTypeId);

                entity.Property(e => e.Description).HasMaxLength(50);

                entity.Property(e => e.FontAwesomeIcon)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Url)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Surveys>(entity =>
            {
                entity.HasKey(e => e.SurveyId);

                entity.Property(e => e.SurveyId).ValueGeneratedNever();

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.Surveys)
                    .HasForeignKey(d => d.ResourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Surveys_Resources1");

                entity.HasOne(d => d.SurveyType)
                    .WithMany(p => p.Surveys)
                    .HasForeignKey(d => d.SurveyTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Surveys_SurveyTypes");
            });

            modelBuilder.Entity<UserAdmins>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).ValueGeneratedNever();

                entity.Property(e => e.WindowsLogin)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.User)
                    .WithOne(p => p.UserAdmins)
                    .HasForeignKey<UserAdmins>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserAdmins_Users");
            });

            modelBuilder.Entity<UserLoginAudit>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLoginAudit)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserLoginAudit_Users");
            });

            modelBuilder.Entity<UserProjects>(entity =>
            {
                entity.HasKey(e => e.UserProjectId);

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.UserProjects)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserProjects_Projects");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserProjects)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserProjects_Users");
            });

            modelBuilder.Entity<UserTypes>(entity =>
            {
                entity.HasKey(e => e.UserTypeId)
                    .HasName("PK_UserTypes_1");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_Users_1");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);

                entity.HasOne(d => d.UserType)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Users_UserTypes");
            });

            modelBuilder.Entity<ComplianceLog>(entity =>
            {
                entity.HasKey(e => e.ComplianceId)
                .HasName("PK_Complian_1");
                entity.HasOne(d => d.Projects)
                    .WithMany(p => p.ComplianceLogs)
                    .HasForeignKey(d => d.ProjectID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ComplianceLog_Projects");


                entity.HasOne(d => d.Users)
                   .WithMany(p => p.ComplianceLogs)
                   .HasForeignKey(d => d.UserID)
                   .OnDelete(DeleteBehavior.ClientSetNull)
                   .HasConstraintName("FK_ComplianceLog_Users");


            });

            modelBuilder.Query<MenuItem>();

            modelBuilder.Query<SSOUser>();

            modelBuilder.Entity<UserFavourites>(entity =>
            {
                entity.HasKey(e => e.FavId)
                .HasName("PK_UserFavourites");

                entity.HasOne(d => d.Resources)
                    .WithMany(p => p.UserFavourites)
                    .HasForeignKey(d => d.ResourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    
                    .HasConstraintName("FK_UserFavourites_Resources");

                entity.HasOne(d => d.Users)
                   .WithMany(p => p.UserFavourites)
                   .HasForeignKey(d => d.UserID)
                   .OnDelete(DeleteBehavior.ClientSetNull)
                   .HasConstraintName("FK_UserFavourites_Users");

            });


        }

        /// <summary>
        /// Added GetMenuItemByUserIDAsync fucation in DB class file AuthGatewayDevContext.cs for Menu Category
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public async Task<List<MenuItem>> GetMenuItemByUserIDAsync(int UserId)
        {
            // Initialization.
            List<MenuItem> mnuLst = new List<MenuItem>();

            try
            {
                // Parameter.
                SqlParameter usernameParam = new SqlParameter("@UserId", UserId.ToString() ?? (object)DBNull.Value);

                // Executing.
                string sqlQuery = "EXEC [dbo].[sp_GetPermittedResourcesMenu] " +
                                    "@UserId";

                mnuLst = await this.Query<MenuItem>().FromSql(sqlQuery, usernameParam).ToListAsync();


            }
            catch (Exception ex)
            {
                throw ex;
            }

            return mnuLst;
        }

        // Switching the default user persmission
        int getFromUserID(string UserName)
        {
            // Taking Default User Permissions Profile ID details from the config file
            var builder = new ConfigurationBuilder()
                                    .SetBasePath(Directory.GetCurrentDirectory())
                                    .AddJsonFile("appsettings.json");
            var configuration = builder.Build();

            // Declaring the users mail id domains
            string mhhs = "@mhhsprogramme.co.uk";
            string xplatform = "@xplatform.com";

            // Switching the default user persmission as per the mail id domains
            if (UserName.EndsWith(mhhs))
            {
               return Int32.Parse(configuration["DefaultUserPermissionsProfile:mhhs"]);

            } else if (UserName.EndsWith(xplatform))
            {
                return Int32.Parse(configuration["DefaultUserPermissionsProfile:xplatform"]);
            } else
            {
                return Int32.Parse(configuration["DefaultUserPermissionsProfile:default"]);
            }
        }

        // For SSO UserId lookup
        public string GetSSOUserID(string UserName, string FullName)
        {
            // Initialization.
            string returnValue = string.Empty;

            // Get default user ID
            int FromUserID = getFromUserID(UserName);

            try
            {
                // Parameter.
                object[] parameters = {
                    new SqlParameter("@UserName", UserName.ToString() ?? (object)DBNull.Value),
                    new SqlParameter("@FullName", FullName.ToString() ?? (object)DBNull.Value),
                    new SqlParameter("@FromUserId", FromUserID.ToString() ?? (object)DBNull.Value),
                    new SqlParameter("@UserId", System.Data.SqlDbType.Int)
                    {
                        Direction = System.Data.ParameterDirection.Output
                    }
                };

                // Query String
                string sqlQuery = "EXEC [dbo].[sp_GetSSOUserId] @UserName, @FullName, @FromUserId, @UserId OUTPUT";

                // Get the stuff from the database
                //object i =  Query<SSOUser>().FromSql(sqlQuery, parameters).ToListAsync();

                object i = this.Database.ExecuteSqlCommand(sqlQuery, parameters);
                
                returnValue = (parameters[3] as SqlParameter).Value.ToString();


                // Wait until the database function has returned
                //List<GetSSOUserResults> allUserItems = allUserIdTask.Result;

                // Parse the database menu list into separate apps, reports and favourites
                //CategoryParser parser = new CategoryParser();
                //objReturnMenu.UserId = parser.CreateMenuStructure(null, allUserItems);

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return returnValue;
        }
    }
}
