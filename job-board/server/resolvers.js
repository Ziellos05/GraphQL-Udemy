import { Job, Company } from './db.js';

export const resolvers = {
    
    Query: {
      job: (root, { id }) => Job.findById(id),
      jobs: () => Job.findAll(),
      company: (root, { id }) => Company.findById(id),
    },

    Mutation: {
      createJob: (_root, { input }) => Job.create(input),
      updateJob: (_root, { input }) => Job.update(input),
      deleteJob: (_root, { id }) => Job.delete(id)
    },

    Job: {
      company: (job) => Company.findById(job.companyId),
    },

    Company: {
      jobs: (company) => Job.findAll((job) => job.companyId === company.id),
    }
  };