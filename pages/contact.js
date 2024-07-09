// pages/contact.js
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">Feel free to reach out to me:</p>
      <ul className="list-disc list-inside">
        <li>Email:huangdeshiou@gmail.com</li>
        <li>LinkedIn: https://www.linkedin.com/in/de-shiou-huang-4246202a3/</li>
        <li>GitHub:https://github.com/joyehuang</li>
      </ul>
    </Layout>
  );
}