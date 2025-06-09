import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-900">Otanazarov Otabek</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Backend Developer — Strong Junior / Pre-Middle seviyasida dasturchi
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Bog'lanish</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">otabekotanarov77@gmailcom</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">+998 91 995 77 07</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Otanazarov Otabek. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
