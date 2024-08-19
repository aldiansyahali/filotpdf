
# Aplikasi Pembaca File PDF dilengkapi Chatbot

Repositori ini berisi aplikasi web untuk membaca file PDF dan dilengkapi dengan chatbot yang dapat berinteraksi untuk mencari informasi dalam dokumen tersebut.

## Teknologi yang Digunakan

- **Next.js 14**
- **Tailwind CSS**
- **Neon DB**
- **AWS S3**
- **Pinecone**
- **OpenAI API**
- **Clerk**

## Instalasi

### Prasyarat

Pastikan Anda telah menginstal Node.js dan memiliki akun AWS, Clerk, Pinecone, serta API key dari OpenAI.

### Langkah Instalasi

1. **Clone repositori:**

   ```bash
   git clone https://github.com/aldiansyahali/filotpdf.git
   cd nama-repo
   ```

2. **Instal dependensi:**

   ```bash
   npm install
   ```

3. **Konfigurasi environment:**

   Buat file `.env.local` di direktori root dan tambahkan variabel berikut:

   ```bash
   OPENAI_API_KEY=your-openai-api-key
   PINECONE_API_KEY=your-pinecone-api-key
   S3_BUCKET_NAME=your-s3-bucket-name
   DATABASE_URL=your-neon-db-url
   
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_public_key
    CLERK_SECRET_KEY=clerk_secret_key

    DATABASE_URL=url_database

    NEXT_PUBLIC_S3_ACCESS_KEY_ID=aws_key_id
    NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=aws_S3_secret_key
    NEXT_PUBLIC_S3_BUCKET_NAME=aws_bucket_name

    PINECONE_ENVIRONMENT=pinecone_environment
    PINECONE_API_KEY=pinecone_api_key

    OPENAI_API_KEY=openaiAPI_key
   ```

4. **Jalankan server pengembangan:**

   ```bash
   npm run dev
   ```

   Akses [http://localhost:3000](http://localhost:3000) di browser Anda.

5. **Build untuk produksi:**

   ```bash
   npm run build
   npm start
   ```

## Penggunaan

1. Unggah file PDF melalui halaman utama.
2. Gunakan chatbot untuk mencari informasi dalam PDF tersebut.

---

Anda bisa mengubah atau menambahkan informasi lain sesuai kebutuhan proyek Anda.