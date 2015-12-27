using Microsoft.AspNet.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Aurelia_Skeleton
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();            
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }

        // Entry point for the application.
        public static void Main(string[] args) => Microsoft.AspNet.Hosting.WebApplication.Run<Startup>(args);
    }
}
