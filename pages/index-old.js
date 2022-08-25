import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const ShowLink = ({ show }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Portfolio</h1>
    <ul>
      {props.shows.map(show => (
        <ShowLink key={show.id} show={show} />
      ))}
    </ul>
    <style jsx global>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          border: none;
          border-bottom: 1px solid #eee;
          list-style: none;
          margin: 5px 0;
          padding: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </Layout>
  
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;