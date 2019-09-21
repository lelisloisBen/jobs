import React from 'react';
import styles from './Home.module.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import companyLogo from '../../assets/images/dance.jpg';
import Icon from '../../assets/icons/icon.jpg';

const Home = () => {
  return (
    <div className={styles.Home} >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col">

            <Card body inverse style={{ backgroundColor: '#231E1F', borderColor: '#333' }}>
              <CardTitle>
                <div className="row">
                  <div className="col">
                    <img src={companyLogo} className={styles.companyLogo} alt="Company Logo" />
                    &nbsp;
                    Company Name
                  </div>
                  <div className="col text-right">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
              </CardTitle>
              <CardText>
                Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man. Now what? Daddy Bender, we're hungry. WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! Who's brave enough to fly into something we all keep calling a death sphere?
              </CardText>
              <CardText className="text-right">
                <i><i className="fas fa-map-marker-alt" style={{color: '#FFF'}}></i> Miami-Beach</i>
              </CardText>
              <button type="button" className="button amber" >Send Request</button>
            </Card>

            <Card body className={styles.cards}>
              <CardTitle>
                <div className="row">
                  <div className="col">
                    <img src={Icon} className={styles.Icon} alt="Icon" />
                    &nbsp;
                    Notifications
                  </div>
                  <div className="col text-right">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
              </CardTitle>
              <CardText>
                You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. There's one way and only one way to determine if an animal is intelligent. Dissect its brain! We'll go deliver this crate like professionals, and then we'll go home.
              </CardText>
              <CardText className="text-right">
                <i><i className="fas fa-map-marker-alt" style={{color: '#000'}}></i> Jobs.com</i>
              </CardText>
            </Card>

            <Card body className={styles.cards}>
              <CardTitle>
                <div className="row">
                  <div className="col">
                    <img src={Icon} className={styles.Icon} alt="Icon" />
                    &nbsp;
                    Notifications
                  </div>
                  <div className="col text-right">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
              </CardTitle>
              <CardText>
                Meh. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. We'll go deliver this crate like professionals, and then we'll go home. Ooh, name it after me! I guess because my parents keep telling me to be more ladylike. As though!
              </CardText>
              <CardText className="text-right">
                <i><i className="fas fa-map-marker-alt" style={{color: '#000'}}></i> Jobs.com</i>
              </CardText>
            </Card>

          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;