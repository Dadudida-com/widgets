export default (style)=>{
  return(`

    .Search {
      border-radius: 0.8rem;
      border: 1px solid rgba(0,0,0,0.2);
      outline: none !important;
      color: ${style.colors.text};
      font-size: 1.2rem;
      padding: 0.8rem;
      width: 100%;
    }

    .Search::placeholder {
      color: rgb(180,180,180);
    } 

    .Search:focus, .Search:focus-visible {
      border: 1px solid ${style.colors.primary};
    }

  `)
}