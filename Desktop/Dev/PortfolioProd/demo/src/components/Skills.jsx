export const Skills= () => {
  return (
    <div className="h-screen flex justify-between items-center px-48">
      <div className="flex flex-col justify-between h-2/3">
        <div className="h-2/5 flex flex-col justify-between">
          <h1 className=" text-white text-3xl">MY STACK</h1>
          <p className="text-slate-300 text-lg">HTML & CSS, Javascript: HTML5, CSS3, ECMAScript5/6/7 <br /> FlexBox, Grid, Bootstrap, Bulma, Tailwind, Materialize, Webpack, Gulp
          <br /> Vite, SCSS, React.js</p>
          <hr />
        </div>
        <div className="h-2/5 flex flex-col justify-between">
        <h1 className="text-white text-3xl">MY SKILLS</h1>
          <p className="text-slate-300 text-lg"> Object-oriented programming 
            <br /> Knowledge of data structures and algorithms 
            <br /> Higher mathematics 
            <br /> Functional Programmin 
            <br /> English: B2 level
          </p>
          <hr />
        </div>
      </div>
      
      <div className="flex flex-col justify-between h-2/3">
        <div className="h-2/5 flex flex-col justify-between">
          <h1 className="text-white text-3xl">EDUCATION</h1>
          <p className="text-slate-300 text-lg"> 
            PEOPLES' FRIENDSHIP UNIVERSITY OF RUSSIA <br />
            Faculty of Physics, Mathematics and Natural Sciences
          </p>
          <hr />
        </div>
        <div className="h-2/5 flex flex-col justify-between">
          <h1 className="text-white text-3xl">CONTACT ME</h1>
          <p className="text-slate-300 text-lg"> 
            Telegram: <a href="https://t.me/uvkuznetsov">@uvkuznetsov</a> <br />
            e-mail: yuriy_kuznetsov_73@mail.ru
          </p>
          <hr />
        </div>
      </div>
      
    </div>
  )
}
