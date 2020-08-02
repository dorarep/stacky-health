export const Footer = () => (
  <>
    <footer>
      <div className='container'>
        <span>&copy; dorarep</span>
      </div>
    </footer>
    <style jsx>{`
      footer {
        width: 100vw;
        height: 32px;
        background-color: var(--main-color);
        box-shadow: var(--shadow);
        margin-top: 2rem;
      }
      .container {
        margin: 0 auto;
        height: 100%;
        max-width: 900px;
        text-align: center;
      }
      span {
        color: white;
      }
    `}</style>
  </>
);
