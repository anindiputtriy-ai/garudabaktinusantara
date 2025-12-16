'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
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
              Selamat datang di PT GARUDA BAKTI NUSANTARA. Syarat dan Ketentuan ini mengatur penggunaan layanan 
              Jasa Pengurusan Transportasi (JPT) yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju 
              untuk terikat oleh syarat dan ketentuan ini.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>PT GARUDA BAKTI NUSANTARA</strong> adalah perusahaan yang bergerak di bidang Jasa Pengurusan Transportasi 
                (JPT) yang berdedikasi untuk memberikan layanan terbaik dalam mengurus kebutuhan perizinan dan manajemen transportasi Anda.
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Layanan JPT</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT GARUDA BAKTI NUSANTARA menyediakan layanan-layanan berikut:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Layanan Perizinan</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Pengurusan Izin Operasional Transportasi</li>
                  <li>• Perpanjangan Dokumen Kendaraan</li>
                  <li>• Pengurusan SIM dan STNK</li>
                  <li>• Izin Trayek dan Rute</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Layanan Manajemen</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Manajemen Armada</li>
                  <li>• Tracking dan Monitoring</li>
                  <li>• Konsultasi Regulasi</li>
                  <li>• Audit Kepatuhan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Kewajiban Klien</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sebagai klien PT GARUDA BAKTI NUSANTARA, Anda setuju untuk:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Menyediakan Dokumen Lengkap</h3>
                  <p className="text-gray-600 text-sm">Memberikan semua dokumen yang diperlukan dengan tepat waktu</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Informasi Akurat</h3>
                  <p className="text-gray-600 text-sm">Memastikan semua informasi yang diberikan adalah benar dan valid</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pembayaran Tepat Waktu</h3>
                  <p className="text-gray-600 text-sm">Melakukan pembayaran sesuai dengan kesepakatan yang telah ditetapkan</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kerjasama</h3>
                  <p className="text-gray-600 text-sm">Bekerjasama dalam proses verifikasi dan audit yang diperlukan</p>
                </div>
              </div>
            </div>
          </section>

          {/* Fees and Payment */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biaya dan Pembayaran</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Struktur Biaya</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Biaya Layanan:</strong> Ditentukan berdasarkan jenis layanan JPT yang dipilih</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Biaya Administrasi:</strong> Biaya proses dan pengurusan dokumen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Biaya Tambahan:</strong> Jika ada kebutuhan khusus atau mendesak</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lain yang telah disepakati. 
              Semua pembayaran harus diselesaikan sebelum layanan dimulai, kecuali ada kesepakatan lain.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Batasan Tanggung Jawab</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT GARUDA BAKTI NUSANTARA tidak bertanggung jawab atas:
            </p>
            <div className="bg-red-50 rounded-lg p-6">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Keterlambatan yang disebabkan oleh pihak ketiga (instansi pemerintah, dll)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Kerugian yang disebabkan oleh informasi yang tidak akurat dari klien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Keputusan penolakan dari otoritas terkait yang di luar kendali kami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Kerusakan atau kehilangan dokumen selama pengiriman (jika ditangani pihak ketiga)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pengakhiran Layanan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Baik PT GARUDA BAKTI NUSANTARA maupun klien dapat mengakhiri layanan dengan:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pemberitahuan 30 Hari</h3>
                <p className="text-gray-600 text-sm">
                  Pengakhiran harus diberitahukan minimal 30 hari sebelumnya secara tertulis
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pelunasan Biaya</h3>
                <p className="text-gray-600 text-sm">
                  Semua biaya yang telah terjadi harus dilunasi sebelum pengakhiran
                </p>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Gavel className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Hukum yang Berlaku</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. 
              Setiap sengketa yang timbul dari atau sehubungan dengan Syarat dan Ketentuan ini akan diselesaikan melalui 
              musyawarah untuk mufakat.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Yurisdiksi:</strong> Pengadilan Negeri Jakarta Selatan adalah yurisdiksi eksklusif untuk menangani 
                sengketa yang tidak dapat diselesaikan secara damai.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span className="text-gray-600 ml-2">legal@garudabaktinusantara.co.id</span>
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
              Dengan menggunakan layanan PT GARUDA BAKTI NUSANTARA, Anda mengakui telah membaca, memahami, 
              dan setuju untuk terikat oleh Syarat dan Ketentuan ini. Syarat dan Ketentuan dapat diperbarui 
              dari waktu ke waktu dengan pemberitahuan sebelumnya kepada klien.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 PT GARUDA BAKTI NUSANTARA. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}