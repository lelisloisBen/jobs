import React from 'react';
import styles from './Home.module.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import companyLogo from '../../assets/images/dance.jpg';

const Home = () => {
  return (
    <div className={styles.Home} >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
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
              <button type="button" className="btn btn-primary">Send Request</button>
            </Card>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;