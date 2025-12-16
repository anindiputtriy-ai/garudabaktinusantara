'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GB</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  PT GARUDA BAKTI NUSANTARA
                </span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Link href="/">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              PT GARUDA BAKTI NUSANTARA - Jasa Pengurusan Transportasi (JPT)
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Selamat datang di PT GARUDA BAKTI NUSANTARA. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
              Anda ketika menggunakan layanan Jasa Pengurusan Transportasi (JPT) kami.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan menggunakan layanan kami, Anda setuju dengan praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Pengumpulan Data</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kami dapat mengumpulkan jenis informasi berikut:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi yang Kami Kumpulkan:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Nama lengkap, alamat email, nomor telepon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Alamat perusahaan dan informasi kontak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Informasi dokumen perizinan transportasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Data armada dan kendaraan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Informasi transaksi dan pembayaran</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Penggunaan Data</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kami menggunakan informasi pribadi Anda untuk:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Layanan JPT</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Mengurus perizinan transportasi</li>
                  <li>• Manajemen dokumen armada</li>
                  <li>• Konsultasi regulasi</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Komunikasi</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Mengirim update layanan</li>
                  <li>• Notifikasi status pengurusan</li>
                  <li>• Dukungan pelanggan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Keamanan Data</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT GARUDA BAKTI NUSANTARA berkomitmen untuk melindungi data pribadi Anda dengan:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enkripsi Data</h3>
                  <p className="text-gray-600 text-sm">Semua data pribadi dienkripsi menggunakan teknologi terkini</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Akses Terbatas</h3>
                  <p className="text-gray-600 text-sm">Hanya personel yang berwenang yang dapat mengakses data Anda</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Audit Keamanan</h3>
                  <p className="text-gray-600 text-sm">Pemeriksaan keamanan berkala untuk melindungi data</p>
                </div>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Hak Anda</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sebagai pemilik data, Anda memiliki hak untuk:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Mengakses</strong> - Meminta salinan data pribadi yang kami simpan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Mengoreksi</strong> - Memperbaiki data pribadi yang tidak akurat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Menghapus</strong> - Meminta penghapusan data pribadi Anda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Membatasi</strong> - Membatasi pengolahan data pribadi Anda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Menolak</strong> - Menolak pengolahan data pribadi Anda</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
              silakan hubungi kami:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span className="text-gray-600 ml-2">privacy@garudabaktinusantara.co.id</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Telepon:</span>
                  <span className="text-gray-600 ml-2">085353876138</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Alamat:</span>
                  <span className="text-gray-600 ml-2">
                    Wisma Kemang Lantai Ground, Jl. Kemang Selatan Raya No. 1, Jakarta Selatan
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan dapat diperbarui dari waktu ke waktu. 
              PT GARUDA BAKTI NUSANTARA berkomitmen untuk melindungi privasi Anda dalam setiap layanan Jasa Pengurusan Transportasi (JPT) yang kami berikan.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}