import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the source code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>You can download the source code of this project on my GitHub.</p>
        </div>
        <button className={styles.btnPrimary}>Source Code</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene}
               alt="download.png"
               className={styles.fullImg} />
        </div>
        </div>
      </div>
  )
}

export default Download