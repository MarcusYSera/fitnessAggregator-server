import Model from '../models/model';

import { testEnvironmentVariable } from '../config';

const userModel = new Model('users');

export const indexPage = (req, res) =>
  res.status(200).json({ message: testEnvironmentVariable });

export const addUser = async (req, res) => {
  const { stravaId, refreshToken } = req.body;
  const columns = 'stravaid, refreshtoken';
  const values = `${stravaId}, '${refreshToken}'`;
  try {
    const data = await userModel.insertWithReturn(columns, values);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const clause = ` WHERE stravaid = ${id}`;
    const data = await userModel.select('refreshtoken', clause);
    // const data = await userModel.select('stravaid, refreshtoken');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};
