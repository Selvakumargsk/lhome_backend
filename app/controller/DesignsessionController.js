const Designsession=require('../model/Designsessionmodel');

const DesignsessionBooking = async(req, res)=> {
    try {
      const { own, floorplan, location ,planning, looking, budget, Possession, nearestcentre, meetingdate,meetingtime } = req.body;
  
      const userDesign = await Designsession.create({
        own,
        floorplan,
        location,
        planning,
        looking,
        budget,
        Possession,
        nearestcentre,
        meetingdate,
        meetingtime
      });
      res.status(201).json({msg : 'Your designsession created successfully',userDesign });
      if(!userDesign){
        return res.status(400).json({msg:'Missing required fields'})
      }
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error });
    }
  }
  
  module.exports = { DesignsessionBooking };
  