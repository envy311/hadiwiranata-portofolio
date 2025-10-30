import BlurText from "./components/BlurText/BlurText";
import { useState } from "react";
import StarBorder from "./components/StarBorder/StarBorder";
import Hyperspeed from "./components/backgrounds/Hyperspeed";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import GradientText from "./components/Gradienttext/Gradienttext";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listProyek, listsertif, listTools } from "./components/data";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
  console.log("Animation completed!");
};

function App() {
  const [showSertifikasi, setShowSertifikasi] = useState(false);
  return (
    <>
      <div className="container max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* ===== HOME ===== */}
        <div
          className="home relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 items-center"
          id="home"
        >
          <div className="fixed inset-0 -z-10">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

          <div className="flex flex-col justify-center items-start p-4 sm:p-6">
            <SplitText
              text="Hadi Wiranata"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white pb-2"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-2xl sm:text-3xl md:text-4xl"
            >
              Bachelor of Computer Science in Information Systems
            </GradientText>
            <BlurText
              text="Lulusan Sistem Informasi dengan dasar yang kuat di bidang teknologi dan analisis bisnis. Antusias dalam belajar hal baru serta menciptakan solusi praktis melalui pemanfaatan IT."
              delay={50}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=" text-white pb-5 text-sm sm:text-base"
            />
            <div className="flex space-x-2 flex-wrap">
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
              >
                Download CV
              </StarBorder>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
              >
                Lihat Project
              </StarBorder>
            </div>
          </div>

          <div className="flex justify-center items-center p-4 mx-5 rounded-xl pb-20">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={1.5}
            >
              <div>
                <ProfileCard
                  name="Hadi Wiranata"
                  title="Front-end Dev"
                  handle="nata_311"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="project/fotofoto.jpeg"
                  showUser
                  Info={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </AnimatedContent>
          </div>
        </div>

        {/* ===== ABOUT ===== */}
        <div className="about col-span-1 md:col-span-2 mt-32 py-10" id="about">
          <div
            className="flex flex-col md:flex-row w-full max-w-8xl mx-auto bg-zinc-900 p-6 items-start md:items-center gap-6 rounded-3xl
                    border border-cyan-400 shadow-[0_0_20px_rgba(64,255,170,0.7)]"
          >
            <div className="md:w-2/3 flex flex-col gap-6 ml-6">
              <h1 className="text-white text-3xl sm:text-4xl font-bold">
                ABOUT
              </h1>
              <BlurText
                text="Mahasiswa lulusan Sistem Informasi Universitas Nusantara PGRI Kediri yang memiliki minat besar di bidang teknologi, data, dan pengembangan solusi bisnis. Saya terbiasa mempelajari berbagai tools serta framework baru untuk meningkatkan efisiensi dan menghasilkan solusi yang inovatif. Pengalaman saya berasal dari proyek akademik maupun pengembangan pribadi, dengan fokus pada pemecahan masalah, kerja tim, serta kemampuan beradaptasi. Saya bersemangat untuk berkontribusi melalui keterampilan teknologi, analisis, dan kreativitas guna memberikan hasil yang berdampak positif di dunia profesional."
                delay={50}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className=" text-white text-lg text-justify mb-8"
              />
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <div className="bg-zinc-700 p-4 rounded-xl text-center flex-1 border border-cyan-400 shadow-[0_0_20px_rgba(64,255,170,0.7)]">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Fresh Graduate
                  </h3>
                  <p className="text-white text-sm">Pengalaman</p>
                </div>
                <div className="bg-zinc-700 p-4 rounded-xl text-center flex-1 border border-cyan-400 shadow-[0_0_20px_rgba(64,255,170,0.7)]">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    3
                  </h3>
                  <p className="text-white text-sm">Project Selesai</p>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0 w-full md:w-1/3 flex justify-center items-center">
              <div>
                <Lanyard />
              </div>
            </div>
          </div>
        </div>

        {/* ===== TOOLS ===== */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.5}
        >
          <div className="tools mt-32 w-full text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Tools</h2>
              <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
                {listTools.map((tool) => (
                  <div
                    className="flex items-center gap-2 p-3 border-zinc-600 bg-zinc-900 rounded-md hover:bg-zinc-800 border group w-full max-w-sm"
                    key={tool.id}
                  >
                    <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded"
                    />
                    <div>
                      <h4 className="font-bold">{tool.nama}</h4>
                      <p className="opacity-75 text-sm">{tool.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* ===== PORTFOLIO ===== */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.5}
        >
          <div className="porto mt-32 w-full text-white" id="project">
            <div>
              <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
            </div>

            <div className="flex justify-center gap-10 border-b border-zinc-700 mb-10">
              <button
                onClick={() => setShowSertifikasi(false)}
                className={`pb-2 text-lg font-semibold ${
                  !showSertifikasi
                    ? "border-b-2 border-white text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Project
              </button>
              <button
                onClick={() => setShowSertifikasi(true)}
                className={`pb-2 text-lg font-semibold ${
                  showSertifikasi
                    ? "border-b-2 border-white text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sertifikasi
              </button>
            </div>

            {!showSertifikasi ? (
              <div className="porto-box mt-14 grid lg:grid-cols-4 gap-6">
                {listProyek.map((proyek) => (
                  <div
                    className="items-center gap-4 p-3 bg-zinc-900 border-zinc-500 rounded-lg hover:bg-zinc-800  w-full max-w-sm"
                    key={proyek.id}
                  >
                    <img
                      src={proyek.gambar}
                      alt="img"
                      className="w-full bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded"
                    />
                    <div>
                      <h4 className="font-bold mt-3">{proyek.nama}</h4>
                      <p className="opacity-75 text-sm mt-3">{proyek.desk}</p>
                      <div className="flex flex-wrap gap-2">
                        {proyek.tools.map((tool, index) => (
                          <h4
                            className="text-sm py-1 px-3 border-zinc-300 rounded-lg bg-zinc-600 mt-2 font-semibold"
                            key={index}
                          >
                            {tool}
                          </h4>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      {proyek.link && (
              <a
                href={proyek.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-600 rounded-lg p-3 block border border-zinc-500 text-center hover:bg-zinc-700"
              >
                Lihat Website
              </a>
            )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="porto-box mt-14 grid lg:grid-cols-4 gap-6">
                {listsertif.map((sertif) => (
                  <div
                    className="items-center gap-4 p-3 bg-zinc-900 border-zinc-500 rounded-lg hover:bg-zinc-800  w-full max-w-sm"
                    key={sertif.id}
                  >
                    <img
                      src={sertif.gambar}
                      alt="img"
                      className="w-full bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded"
                    />
                    <div>
                      <h4 className="font-bold mt-3">{sertif.nama}</h4>
                      <p className="opacity-75 text-sm mt-3">{sertif.desk}</p>
                    </div>
                    <div className="mt-8 text-center">
            {sertif.link && (
              <a
                href={sertif.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-600 rounded-lg p-3 block border border-zinc-500 text-center hover:bg-zinc-700"
              >
                Lihat Sertif
              </a>
            )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedContent>
          {/* ===== FORM PESAN ===== */}
<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.5}
>
<div className="Pesan mt-32 text-white">
  <div className="w-full max-w-xl mx-auto bg-zinc-900 border border-cyan-400 rounded-2xl p-6 shadow-[0_0_15px_rgba(64,255,170,0.5)]">
    <h2 className="text-2xl font-bold text-center mb-6">Kirim Pesan</h2>

    <form
      action="https://formspree.io/f/myzbjyqq"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="nama"
        placeholder="Nama Anda"
        className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Anda"
        className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
        required
      />
      <textarea
        name="pesan"
        placeholder="Tulis pesan Anda..."
        className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 h-32 resize-none"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg transition-all"
      >
        Kirim Pesan
      </button>
    </form>

    <p className="text-sm text-center text-gray-400 mt-4">
    </p>
  </div>
</div>
</AnimatedContent>
      </div>
    </>
  );
}

export default App;
