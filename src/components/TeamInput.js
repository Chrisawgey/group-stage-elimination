import React, { useState } from 'react';
import { Button, TextField, Card, CardContent } from '@mui/material';

const TeamInput = ({ onSubmit }) => {
  const [teams, setTeams] = useState({ groupA: [], groupB: [] });
  const [teamName, setTeamName] = useState('');
  const [group, setGroup] = useState('groupA');

  const handleAddTeam = () => {
    setTeams({
      ...teams,
      [group]: [...teams[group], teamName],
    });
    setTeamName('');
  };

  const handleSubmit = () => {
    const groupData = [
      { groupName: 'Group A', teams: teams.groupA, results: [] },
      { groupName: 'Group B', teams: teams.groupB, results: [] },
    ];
    onSubmit(groupData);
  };

  return (
    <Card style={{ margin: '20px', padding: '10px' }}>
      <CardContent>
        <h3>Add Teams</h3>
        <TextField
          label="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddTeam}>
          Add to {group === 'groupA' ? 'Group A' : 'Group B'}
        </Button>
        <Button
          variant="contained"
          onClick={() => setGroup(group === 'groupA' ? 'groupB' : 'groupA')}
        >
          Switch to {group === 'groupA' ? 'Group B' : 'Group A'}
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Teams
        </Button>
      </CardContent>
    </Card>
  );
};

export default TeamInput;
