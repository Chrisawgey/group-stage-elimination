import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';

const GroupStage = ({ groups, onMatchResult }) => {
  const [currentResults, setCurrentResults] = useState({
    team1: '', team2: '', winner: '', loser: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentResults({ ...currentResults, [name]: value });
  };

  const handleResultSubmit = (groupIndex) => {
    onMatchResult(groupIndex, currentResults);
    setCurrentResults({ team1: '', team2: '', winner: '', loser: '' });
  };

  return (
    <div>
      <h2>Group Stage</h2>
      {groups.map((group, groupIndex) => (
        <Card key={group.groupName} style={{ margin: '20px', padding: '10px' }}>
          <CardContent>
            <Typography variant="h5">{group.groupName}</Typography>
            <Typography>Teams: {group.teams.join(', ')}</Typography>

            {/* Two concurrent match inputs */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="team1"
                  label="Team 1"
                  value={currentResults.team1}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  name="team2"
                  label="Team 2"
                  value={currentResults.team2}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="winner"
                  label="Winner"
                  value={currentResults.winner}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  name="loser"
                  label="Loser"
                  value={currentResults.loser}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" onClick={() => handleResultSubmit(groupIndex)}>
              Submit Result
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GroupStage;
