import ssgConfig from "../../../../amdxg.config";

export const Header = () => (
  <>
    <header>
      <div className='container'>
        <a href='/'>{ssgConfig.siteName}</a>
        <span>-健康をクリエイトするための挑戦記-</span>
      </div>
    </header>
    <style jsx>{`
      header {
        width: 100%;
        height: 100%;
        background-color: var(--main-color);
        box-shadow: var(--shadow);
      }
      .container {
        margin: 0 auto;
        height: 100%;
        max-width: 900px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
      }
      span {
        margin-top: 10px;
        margin-left: 10px;
        color: white;
        font-weight: bold;
      }
      @media screen and (max-width: 600px) {
        span { display: none; }
      }
      a {
        color: white;
        text-decoration: none;
        font-family: 'Helvetica Neue', sans-serif;
        text-shadow: 0 1px 1px #fff;
        font-size: 2rem;
        font-weight: bold;
      }
    `}</style>
  </>
);
