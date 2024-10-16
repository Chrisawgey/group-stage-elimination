import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const EliminationBracket = ({ teams }) => {
  if (teams.length === 0) return null;

  return (
    <div>
      <h2>Elimination Bracket</h2>
      <Grid container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={6} key={index}>
            <Card style={{ margin: '10px' }}>
              <CardContent>
                <Typography variant="h6">{team}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EliminationBracket;
