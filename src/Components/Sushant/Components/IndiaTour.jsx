import { Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';

const IndiaTour = () => {

    const card = {
        // border: '1px solid red',
        width: '95%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }
    
        const breakpoints = [
            { width: 1, itemsToShow: 2},
            { width: 500, itemsToShow: 3},
            { width: 900, itemsToShow: 4},
        ];

  return (
    <div>
        <Text textAlign='center' fontSize='27px' fontWeight='bold' fontFamily='sans-serif' color='black' marginTop='80px' marginBottom='40px' >Top Companies hiring now</Text>
    <div style={card}>
        <Carousel breakPoints={breakpoints}>
            <Card word='MNCs' no='1.3K+ are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/345888.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/2917930.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/882188.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4585391.gif' />
            <Card word='Edtech' no='136 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/4826725.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/4614807.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/2883548.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4745221.gif' />
            <Card word='Healthcare' no='106 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/599886.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/96418.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/3816434.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4655735.gif' />
            <Card word='Unicorns' no='90 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/2266092.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/509622.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/4266.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/2482778.gif' />
            <Card word='Internet' no='132 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/4639613.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/992070.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/5194792.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4840473.gif' />
            <Card word='B2C' no='948 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/4640819.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/4745221.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/4610773.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4664249.gif' />
            <Card word='Manufacturing' no='172 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/7538.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/187098.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/1980034.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/4611255.gif' />
            <Card word='Fortune 500' no='87 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/6102877.gif' 
            src2='https://static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v10/resources/cmp-placeholder.c9dea278.svg' 
            src3='https://img.naukimg.com/logo_images/groups/v1/97322.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/82242.gif' />
            <Card word='Product' no='614 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/4604915.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/2491718.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/1495796.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/5014356.gif' />
            <Card word='Banking & Finance' no='144 are actively hiring'  
            src1='https://img.naukimg.com/logo_images/groups/v1/4676301.gif' 
            src2='https://img.naukimg.com/logo_images/groups/v1/4588121.gif' 
            src3='https://img.naukimg.com/logo_images/groups/v1/2993160.gif' 
            src4='https://img.naukimg.com/logo_images/groups/v1/3331916.gif' />
        </Carousel>
    </div>
    </div>
  )
}

export default IndiaTour