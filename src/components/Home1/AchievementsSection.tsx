import { Parallax } from "react-parallax";
import Link from "next/link";

const AchievementsSection = ({ dark }) => {
  return (
    <Parallax
      bgImage="/assets/images/full-width-images/section-bg-2.jpg"
      strength={300}
      className="bg-fixed"
    >
      <div className="bg-black/90 py-16 px-4 text-white">
        <div className="container mx-auto relative">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
                Check recent achievements.
              </h2>
              <p className="text-lg mb-8 animate-fade-in-up delay-100">
                We provide effective ideas that grow businesses for our clients.
              </p>
              <div className="animate-fade-in-up delay-200">
                <Link
                  href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                  className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
                >
                  <span>Request Price</span>
                </Link>
              </div>
            </div>
            {/* Replace the Facts component or add its logic here */}
            <div className="w-full lg:w-2/3 px-4">
              {/* Example placeholder for Facts */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">100+</h3>
                  <p className="text-sm">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">10+</h3>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">25+</h3>
                  <p className="text-sm">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AchievementsSection;
