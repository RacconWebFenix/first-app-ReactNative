import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
