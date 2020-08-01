import ssgConfig from "../../../../amdxg.config";

export const Header = () => (
  <>
    <header>
      <div className='container'>
        <a href='/'>{ssgConfig.siteName}</a>
      </div>
    </header>
    <style jsx>{`
      header {
        width: 100vw;
        height: 48px;
        background-color: #487578;
      }
      .container {
        margin: 0 auto;
        height: 100%;
        max-width: 900px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
      }
      a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </>
);
