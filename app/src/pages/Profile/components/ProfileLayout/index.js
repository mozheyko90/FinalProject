import Spinner from "../../../../components/Spinner";

import styles from "./index.module.scss";

const ProfileLayout = ({
  userInfo,
  isLoading,
}) => {
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner color="yellow" />
      ) : (
        <>
          <div className={styles.profileWrapper}>
            <h2 className={styles.title}>Profile Information</h2>
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <p className={styles.field}>Name</p>
                <p className={styles.field}>Email</p>
                <p className={styles.field}>Gender</p>
                <p className={styles.field}>Phone Number</p>
              </div>

              <div className={styles.info}>
                <p>
                  {userInfo.firstName} {userInfo.lastName}
                </p>
                <p>{userInfo.email}</p>
                <p>{userInfo.gender}</p>
                <p>{userInfo.phone}</p>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default ProfileLayout;