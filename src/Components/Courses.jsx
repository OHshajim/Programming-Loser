import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Card from "./Card/Card";

const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('Data.JSON')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    const Level1=data.filter(data=>data.category==="Course_l1")
    const Level2=data.filter(data=>data.category==="Course_l2")
    const Conceptual=data.filter(data=>data.category==="Conceptual")
    // console.log(Level1,data,Level2,Conceptual);
    return (
        <div className="m-5 md:mx-10 lg:mx-48">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab >Level 1 Course</Tab>
                    <Tab>Level 2 Course</Tab>
                    <Tab>Conceptual Session</Tab>
                </TabList>
                <TabPanel>
                    {
                        Level1.map(course=><Card key={course.category} data={course}></Card>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        Level2.map(course=><Card key={course.category} data={course}></Card>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        Conceptual.map(course=><Card key={course.category} data={course}></Card>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Courses;