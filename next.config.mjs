/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
             
            },
          ],
        },
        // async redirects() {
        //   return [
        //     {
        //       source: '/dashboard',
        //       destination: '/dashboard/admin', // or '/dashboard/user', depending on your requirement
        //       permanent: false, // Set to true if you want to make the redirect permanent (301)
        //     },
        //   ];
        // },
        typescript:{
          ignoreBuildErrors:true
        }
      
};

export default nextConfig;

