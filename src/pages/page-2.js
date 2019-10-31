import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Biodata</h1>
    <p>Nama : Albert Reinhold Mayernest</p>
    <p>Tempat tanggal lahir : Samarinda, 10 Mei 1996</p>
    <p>Alamat : Villa Tajur Blok. A1, no. 01, Bogor</p>
    <p>WHatsapp : 081224400250</p>
    <p>Facebook : Albert Mayer</p>
    <p>Instagram : Albertmayerr</p>
    <p>Cita-cita : Kurus</p>
    <p>Hobby : Makan dan tidur</p>
    <p>Kegiatan sehari-hari : Ngampus, push rank, gitskuy</p>
    <p>Kata-kata motivasi : "Jadilah dirimu sendiri, orang lain tidak akan merasakan hartamu dimasa mendatang"</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
