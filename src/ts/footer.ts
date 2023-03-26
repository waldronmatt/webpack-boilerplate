document
  ?.querySelector('#footer-copyright')
  ?.append(
    document.createTextNode(new Date().getFullYear() as unknown as string)
  );
