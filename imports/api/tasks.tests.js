import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Tasks } from './tasks.js';
 
if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const message = Random.secret();
      let taskId;
 
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: message,
          createdAt: new Date(),
          
        });
      });
 
      it('can delete owned task', () => {
       const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        const invocation = { message };
        deleteTask.apply(invocation, [taskId]);
        assert.equal(Tasks.find().count(), 0); 
     });
    });
  });}
  
  

