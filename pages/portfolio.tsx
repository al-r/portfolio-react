import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Filter = (filter: any) => (
  <li className="filters__item">
    <a>{filter.name}</a>
  </li>
);

const JobLink = (job: any, test?: string) => (
  <li className="result__item">
    <Link href="/p/[id]" as={`/p/${job.id}`}>
      <a>{job.name}{test ? ' - '+test : ''}</a>
    </Link>
  </li>
);

const Portfolio = (props: any) => (
  <Layout stylingClass={"portfolio"}>
    <ul className="filters">
        <Filter filter={{name: 'All', value: ''}}></Filter>
        <Filter filter={{name: 'Development', value: 'development'}}></Filter>
        <Filter filter={{name: 'Design', value: 'design'}}></Filter>
    </ul>
    <ul className="result">
        <JobLink job={{id: 1, name: 'BBC', category: 'development'}} test={'This is a test'}></JobLink>
        <JobLink job={{id: 2, name: 'Codevember', category: 'development'}}></JobLink>
        <JobLink job={{id: 3, name: 'Lime Creative', category: 'design'}}></JobLink>
        <JobLink job={{id: 4, name: 'BBC', category: 'development'}}></JobLink>
        <JobLink job={{id: 5, name: 'Codevember', category: 'development'}}></JobLink>
        <JobLink job={{id: 6, name: 'Lime Creative', category: 'design'}}></JobLink>
    </ul>
    <style jsx global>{`
    .portfolio {
        background: transparent url("../static/img/bg-portfolio.svg") no-repeat center right scroll;
        background-size: cover;
    }
    .filters {
        align-items: stretch;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        position: relative;
    }
    .filters__item {
        display: flex;
        list-style: none;
    }
    .filters__item a {
        background: #000;
        color: #fff;
        flex: 1 100%;
        padding: 10px;
        margin: 0 5px 5px 0;
        text-transform: uppercase;
        width: 100%;
    }
    .filters__item a:hover {
        background: #FE7A2E;
    }
    .result{
        align-items: stretch;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        position: relative;
    }
    .result__item {
        display: flex;
        flex: 1 1 25%;
        list-style: none;
        text-align: center;
        max-width: 25%;
    }
    @media screen and (max-width: 740px) {
        .result__item {
            flex: 1 1 33.3%;
            max-width: 33.3%;
        }
    }
    .result__item a {
        background-color: #ac2f20;
        border-radius: 100%;
        color: #FFF;
        flex: 1 100%;
        font-weight: bold;
        margin: 0 5px 5px 0;
        padding: 45% 10px;
        position: relative;
        text-transform: uppercase;
        width: 100%;
    }
    .result__item a:hover {
        background-color: rgba(193, 53, 36, 0.75);
    }
    `}</style>
  </Layout>
);

Portfolio.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default Portfolio;