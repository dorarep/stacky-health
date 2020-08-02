export const Footer = () => (
  <>
    <footer>
      <div className='container'>
        <span>&copy; dorarep</span>
      </div>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100%;
        background-color: var(--dark-main-color);
        box-shadow: var(--shadow);
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
