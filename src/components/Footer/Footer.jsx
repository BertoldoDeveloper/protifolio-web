function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <p>© {currentYear} Ladislau Bertoldo.</p>

      <p>Design & Code.</p>
    </footer>
  );
}

export default Footer;
