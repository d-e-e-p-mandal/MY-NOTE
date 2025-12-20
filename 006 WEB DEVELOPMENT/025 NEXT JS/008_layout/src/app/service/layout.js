export default function ServiceLayout({ children }) {
    return (
      <>
        <header>Service Header</header>
        <main>{children}</main>
      </>
    );
  }