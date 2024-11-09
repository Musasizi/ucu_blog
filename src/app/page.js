import Title from "../components/Title";
import Content from "../components/Content";
import Button from '@mui/material/Button';

function Home() {


  return (
    <div>
      <p>These are children</p>
      
      <Title heading="MAKERERE BLOG" />
      <Content details="This is a very nice blog from MAK" />

      <br />

      <Title heading="UGANDA MARTYRS BLOG" />
      <Content details="This is a very nice blog from UMU" />
      <br />

      <Title heading="NDEJJE BLOG" />
      <Content details="This is a very nice blog from NDEJJE" />

      <Button variant="contained" disabled>Contained</Button>
      <Button variant="text">Submit</Button>



      <Button variant="outlined">
        Remove
      </Button>


    </div>
  );
}

export default Home;