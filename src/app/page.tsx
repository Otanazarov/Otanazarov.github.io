import { Mail, Phone, MapPin, GitlabIcon as GitHub, LocateIcon as LocationIcon } from "lucide-react"
import Footer from "@/components/footer"
import SkillCard from "@/components/skill-card"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import "./globals.css"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero/Header Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full blur-3xl opacity-60 transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-50 to-blue-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 transform rotate-3"></div>
              <div className="relative w-full h-full rounded-full bg-gray-200 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                <img
                src="./otabek.jpg"
                alt="Otabek Otabek"
                className="w-full h-full object-cover rounded-full"
                />
              </div>
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Otanazarov Otabek</h1>
              <h2 className="text-xl md:text-2xl text-purple-600 mt-2 font-medium">
                Backend Developer — Strong Junior / Pre-Middle | DevOps Basic
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Node.js va Nest.js texnologiyalari bo'yicha 1 yillik tajribaga ega backend dasturchi. Ma'lumotlar
                bazalari bilan ishlash, API yaratish va turli loyihalarda ishtirok etish tajribasiga egaman.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">otabekotanazarov77@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">+998 91 995 77 07</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">O'zbekiston</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <GitHub className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">https://github.com/Otanazarov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Texnik Ko'nikmalar</h2>
            <p className="mt-4 text-xl text-gray-600">Backend dasturlash va DevOps bo'yicha bilimlarim</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Dasturlash Tillari" skills={["JavaScript", "TypeScript"]} color="purple" />
            <SkillCard title="Backend Texnologiyalar" skills={["Node.js", "Nest.js", "Express.js"]} color="blue" />
            <SkillCard title="Ma'lumotlar Bazalari" skills={["PostgreSQL", "MySQL", "Redis"]} color="green" />
            <SkillCard
              title="ORM va Boshqalar"
              skills={["TypeORM", "Prisma", "WebSocket", "Telegram Bot API"]}
              color="orange"
            />
            <SkillCard title="DevOps" skills={["Docker", "PM2", "Linux", "Git"]} color="red" />
            <SkillCard title="Tillar" skills={["O'zbek (Ona tili)", "English (B2)", "Русский (A2)"]} color="indigo" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tajriba</h2>
            <p className="mt-4 text-xl text-gray-600">Ishtirok etgan loyihalar va amaliyot tajribalarim</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              title="Backend Dasturchi"
              company="Mustaqil Loyihalar"
              period="2023 - Hozirgi vaqtgacha"
              description="Turli xil backend loyihalarida ishtirok etish va mustaqil ravishda loyihalar yaratish"
              achievements={[
                "CRM loyihalarni ishlab chiqish va qo'llab-quvvatlash",
                "E-commerce loyihasida ishtirok etish",
                "LMS (Learning Management System) loyihalarida ishtirok etish",
              ]}
              projects={[
                { name: "e-bilim.uz", url: "https://e-bilim.uz" },
                { name: "sulaymonhotel.uz", url: "https://sulaymonhotel.uz" },
              ]}
            />

            <ExperienceCard
              title="Amaliyotchi"
              company="Appx Group"
              period="Amaliyot"
              description="Backend dasturlash bo'yicha amaliy ko'nikmalarni o'zlashtirish"
             
            />

            <ExperienceCard
              title="Amaliyotchi"
              company="Mbos"
              period="Amaliyot"
              description="Backend dasturlash bo'yicha amaliy ko'nikmalarni o'zlashtirish"
          
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Ta'lim</h2>
            <p className="mt-4 text-xl text-gray-600">Oliy ta'lim va professional kurslar</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <EducationCard
              institution="Urganch Davlat Universiteti"
              degree="Kimyoviy texnologiyalar fakulteti"
              field="Yengil sanoat texnologiyalari va jihozlari"
              period="2021 - 2025"
              type="university"
            />

            <EducationCard
              institution="Data Ta'lim Stansiyasi"
              degree="Backend dasturlash kursi"
              field="Node.js, Nest.js, Git"
              period="2023 aprel - 2024 yanvar"
              type="course"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Bog'lanish</h2>
            <p className="mt-4 text-xl text-gray-600 mb-8">
              Loyihalar bo'yicha hamkorlik yoki ish takliflari uchun bog'laning
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 break-words">otabekotanazarov77@gmail.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-medium text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">+998 91 995 77 07</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <GitHub className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-medium text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 break-words">https://github.com/Otanazarov</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <LocationIcon className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-medium text-gray-900 mb-2">Joylashuv</h3>
              <p className="text-gray-600">O'zbekiston</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
