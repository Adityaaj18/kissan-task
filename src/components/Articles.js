import React from 'react'

const Articles = () => {
   return (
      <div className="articles">
         <div className="row ">
            <div className="col-lg-4">
               <p className="line-1"></p>
            </div>
            <h2
               style={{ textAlign: 'center', fontWeight: '700' }}
               className="col-lg-4"
            >
               Related Articles
            </h2>
            <div className="col-lg-4">
               <p className="line-1"></p>
            </div>
         </div>
         <div className="row gx-4 gy-4" style={{ marginTop: '10px' }}>
            <div className="col-lg-4">
               <div className="card">
                  <img
                     className="article-img"
                     src={require('../img/article1.jpg')}
                     alt=""
                  />
                  <div className="article-info">
                     <h2>Lorem ipsum dolor sit amet</h2>
                     <p>
                        Vivamus vitae urna condimentum, tempor dolor quis,
                        congue justo. Nullam fringilla sed nisl ac fringilla
                     </p>
                  </div>
               </div>
            </div>

            <div className="col-lg-4">
               <div className="card">
                  <img
                     className="article-img"
                     src={require('../img/article2.jpg')}
                     alt=""
                  />
                  <div className="article-info">
                     <h2>Donec finibus sollicitudin semper</h2>
                     <p>
                        Vivamus vitae urna condimentum, tempor dolor quis,
                        congue justo. Nullam fringilla sed nisl ac fringilla
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="card">
                  <img
                     className="article-img"
                     src={require('../img/article3.jpg')}
                     alt=""
                  />
                  <div className="article-info">
                     <h2>Vivamus vitae urna condimentum</h2>
                     <p>
                        Vivamus vitae urna condimentum, tempor dolor quis,
                        congue justo. Nullam fringilla sed nisl ac fringilla
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="card">
                  <img
                     className="article-img"
                     src={require('../img/article4.jpg')}
                     alt=""
                  />
                  <div className="article-info">
                     <h2>Tempor dolor quis congue justo</h2>
                     <p>
                        Vivamus vitae urna condimentum, tempor dolor quis,
                        congue justo. Nullam fringilla sed nisl ac fringilla
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="card">
                  <img
                     className="article-img"
                     src={require('../img/article5.jpg')}
                     alt=""
                  />
                  <div className="article-info">
                     <h2>Nullam dui sapien eleifend sed</h2>
                     <p>
                        Vivamus vitae urna condimentum, tempor dolor quis,
                        congue justo. Nullam fringilla sed nisl ac fringilla
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Articles
