// pages/projects.js
import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ul className="list-disc list-inside">
        <li>Personal Website (This site!)</li>
        <li>Project 2 (Coming soon)</li>
        <li>Project 3 (Coming soon)</li>
      </ul>
    </Layout>
  );
}