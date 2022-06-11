import React from 'react'
import Articles from './Articles'

const Main = () => {
   return (
      <div className="container" style={{ marginTop: '50px' }}>
         <div className="row">
            {' '}
            <div className="col-lg-10">
               <h2 style={{ fontWeight: '700' }}>Justo verpjui Toirer Sem</h2>
               <h5 style={{ marginTop: '25px', lineHeight: '30px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a bibendum tortor. Morbi tristique purus libero, at fermentum
                  eros luctus vitae. Nulla viverra, magna ac finibus
                  condimentum, sapien lacus tincidunt nulla, at dignissim ante
                  justo et erat. Proin eleifend orci nec luctus maximus Nulla
                  viverra, magna ac finibus.
               </h5>
            </div>
            <div className="col-lg-2 submenu">
               <h5>Submenu</h5>
               <ul>
                  <li className="submenu-item">Home</li>
                  <li className="submenu-item">Examples</li>
                  <li className="submenu-item">Contact</li>
                  <li className="submenu-item">About</li>
               </ul>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-10">
               <p>
                  Mauris tincidunt felis sed est egestas pellentesque. Sed
                  rutrum, ipsum sit amet hendrerit hendrerit, justo risus
                  efficitur velit, ut dictum sapien nisl in est. Sed arcu nulla,
                  hendrerit auctor rutrum ac, pretium et odio. Sed accumsan diam
                  eget justo mattis gravida. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Curabitur quam massa, interdum et finibus sit amet,
                  consequat id nisl. Morbi magna velit, egestas nec neque vel,
                  dignissim fermentum nulla. Aliquam non ipsum id felis
                  hendrerit interdum a in nisi. Sed posuere, mi et rhoncus
                  interdum.
               </p>
               <br />
               <p>
                  Vivamus vitae urna condimentum, tempor dolor quis, congue
                  justo. Nullam fringilla sed nisl ac fringilla. Fusce sit amet
                  massa lorem. Sed euismod felis quis augue blandit, nec
                  molestie nulla suscipit. Curabitur sit amet est condimentum,
                  fermentum mauris a, pharetra libero. Fusce ut hendrerit arcu,
                  non fringilla elit.{' '}
               </p>
               <div className="row">
                  <div className="col-lg-5">
                     <p>
                        {' '}
                        In sed purus aliquet, porta tellus id, sagittis mauris.
                        Mauris aliquam pharetra enim, sit amet pretium urna
                        congue sed. Integer dictum venenatis porta. Proin
                        finibus nunc quis elit cursus posuere. Pellentesque nec
                        condimentum nunc, eget tincidunt neque. Pellentesque
                        lobortis ut elit in egestas. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Donec auctor laoreet malesuada.
                        Vivamus luctus eu justo nec aliquam. Class aptent taciti
                        sociosqu ad litora.
                     </p>
                  </div>
                  <div className="col-lg-5">
                     <p style={{ fontSize: '20px', fontStyle: 'italic' }}>
                        {' '}
                        In sed purus aliquet, porta tellus id, sagittis mauris.
                        Mauris aliquam pharetra enim, sit amet pretium urna
                        congue sed. Integer dictum venenatis porta. Proin
                        finibus nunc quis elit cursus posuere. Pellentesque nec
                        condimentum nunc, eget tincidunt neque. Pellentesque
                        lobortis ut elit in egestas.
                        <br />
                        <p style={{ textAlign: 'right' }}>- John Doe</p>
                     </p>
                  </div>
               </div>
               <div>
                  <p>
                     Quisque in malesuada massa. Nam dignissim nisi at lacinia
                     iaculis. Vestibulum tincidunt sodales dolor. Maecenas
                     fringilla, lacus vitae mollis euismod, sem risus dapibus
                     diam, finibus blandit dui ex nec nibh. Curabitur non
                     placerat sem. Vivamus consectetur risus id nunc rutrum
                     pulvinar.
                  </p>
               </div>
               <div className="more">
                  <div className="row">
                     <div className=" col-lg-3">
                        <p className="line-1"></p>
                     </div>
                     <h2 className="col-lg-4" style={{ fontWeight: '700' }}>
                        More in this series
                     </h2>
                     <div className="col-lg-3">
                        <p className="line-1"></p>
                     </div>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                     <div className="row">
                        <div className="col-lg-2">
                           <img
                              className="food-img"
                              src={require('../img/food1.jpg')}
                              alt=""
                           />
                        </div>
                        <div className="col-lg-8 food-desc">
                           <h3>
                              Class aptent taciti sociosqu ad litora torquent{' '}
                           </h3>
                           <p>
                              Class aptent taciti sociosqu ad litora torquent
                              per conubia nostra, per inceptos himenaeos. Mauris
                              convallis euismod turpis ut tincidunt. Etiam id
                              faucibus nulla.Quisque in malesuada massa
                           </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-2">
                           <img
                              className="food-img"
                              src={require('../img/food2.jpeg')}
                              alt=""
                           />
                        </div>
                        <div className="col-lg-8 food-desc">
                           <h3>Donec finibus sollicitudin semper proin </h3>
                           <p>
                              Class aptent taciti sociosqu ad litora torquent
                              per conubia nostra, per inceptos himenaeos. Mauris
                              convallis euismod turpis ut tincidunt. Etiam id
                              faucibus nulla.Quisque in malesuada massa
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="col-lg-2 profile-section"
               style={{ padding: '0px' }}
            >
               <div>
                  <img
                     style={{
                        width: '100%',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px'
                     }}
                     src={require('../img/profile-bg.jpg')}
                     alt=""
                  />
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center'
                     }}
                  >
                     <img
                        className="profile"
                        src={require('../img/profile.jpg')}
                        alt=""
                     />
                  </div>
                  <div className="profile-info">
                     <div className="info">
                        <p>
                           <span style={{ fontWeight: 'bold' }}>Name</span>:
                           Bill Gates
                        </p>
                        <p>
                           <span style={{ fontWeight: 'bold' }}>Email</span>:
                           bil@microsoft.com{' '}
                        </p>
                        <p>
                           <span style={{ fontWeight: 'bold' }}>Phone</span>:
                           +852 555 222
                        </p>
                     </div>
                  </div>
                  <div className="send-message">
                     <h6>Send me a message</h6>
                     <label>Subject</label>
                     <input type="text" />
                     <label>Message</label>
                     <input type="text" style={{ height: '100px' }} />
                     <button id="send">Send</button>
                  </div>
                  <div className="meet">
                     <h6>Or meet me at the office</h6>
                  </div>
                  <img
                     style={{ width: '100%', height: '' }}
                     src={require('../img/map.jpg')}
                     alt=""
                  />
                  <div className="meet">
                     <p>ONE MIDTOWN</p>
                     <p>11 Hoi Shing Rd</p>
                     <p>Tuesn Wan</p>
                  </div>
               </div>
            </div>
         </div>
         <Articles />
      </div>
   )
}

export default Main
