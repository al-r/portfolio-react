import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// Styling
import "../styles.scss";

const ShowLink = (show: any) => (
  <li>
    <Link href="/p/[id]" as={`/p/${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
);

const Index = (props: any) => (
  <Layout stylingClass={"home"}>
    <div id="text-1">Hi,</div>
    <div id="text-2">I am a <span className="highlight">&nbsp;front-end developer.&nbsp;</span></div>
    <div id="text-3">
        <span id="textStatic">I can </span>
        <ul id="textRandom">
            <li>code in JavaScript.</li>
            <li>code apps with Angular.</li>
            <li>develop using Laravel PHP.</li>
            <li>write AWS Lambda functions with Node JS.</li>
            <li>have a go at React Native.</li>
            <li>experiment with React.</li>
            <li>maintain Angular JS apps.</li>
            <li>develop Wordpress' websites.</li>
            <li>code in HTML5 & CSS3.</li>
            <li>build HTML5 ad banners.</li>
            <li>code with SASS & LESS.</li>
            <li>animate with CSS3.</li>
        </ul>
    </div>
    <div className="separator"></div>
    <Link href="/portfolio">
        <a className="button">View portfolio</a>
    </Link>
  </Layout>
  
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default Index;