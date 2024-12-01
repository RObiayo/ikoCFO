import { } from "@heroicons/react/outline"


function Footer() {
    const dataFooter = [
      {
        title: "Links",
        content: ["Home", "About", "Services", "Clients", "Contact"],
      },
      {
        title: "About",
        content: ["Partners", "Careers", "Press", "Community", "Contact"],
      },
      {
        title: "Our Office",
        content: ["Indonesia", "Jl Petemon Kuburan 74 A, Jawa Timur", "Jawa Timur 60252"],
      },
    ];
  
    return (
      <footer className=" bg-theme-gradient w-full py-14 shadow-xl">
        <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
          {/* Left Section */}
          <div className="mr-0 lg:mr-40">
            <img className="w-logo" src="/logo.png" alt="Company Logo" />
            <p className="my-8 leading-relaxed">
              Manage your files efficiently and easily with a simple, fast, and small file manager.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center">
              {["facebook", "instagram", "twitter", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all"
                  aria-label={`Visit our ${platform} page`}
                >
                  <img src={`/${platform}-logo.png`} alt={`${platform} logo`} />
                </a>
              ))}
            </div>
          </div>
  
          {/* Right Section */}
          <div className="hidden lg:flex justify-between">
            {dataFooter.map((footer, index) => (
              <div key={index}>
                <h4 className="font-medium text-white text-base">{footer.title}</h4>
                {footer.content.map((item, idx) => (
                  <p key={idx} className="mt-3 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  