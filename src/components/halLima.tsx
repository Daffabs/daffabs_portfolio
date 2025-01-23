"use client";
import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const HalLima = () => {
  const [expanded, setExpanded] = React.useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="lg:py-16 pt-10">
      <div className="sm:grid-cols-12 bg-dark-4 h-auto items-center p-6 justify-center gap-6">
        <div className="col-span-8 text-white text-center">
          <p className="text-lg mb-2 text-dark-1">- My Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-dark-1">
            My Latest <span className="text-dark-5 italic">Projects</span>
          </h2>
        </div>
        <div className="sm:grid-cols-12 bg-dark-4 h-auto items-center p-6 flex flex-wrap justify-center gap-6">
        <Card sx={{ maxWidth: 345, border: '5px solid #697565' }}>
          <a href="https://pmi-intern-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              height="194"
              image="/images/web-pmi.png"
              alt="PMI"
            />
          </a>
        </Card>
        <Card sx={{ maxWidth: 345, border: '5px solid #697565' }}>
          <a href="https://spk-penilaian-karyawan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              height="194"
              image="/images/web-perdana.png"
              alt="Perdana"
            />
          </a>
        </Card>
        
        </div>
      </div>
    </section>
  );
};

export default HalLima;