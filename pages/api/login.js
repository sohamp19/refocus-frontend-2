import connect from '../../lib/mongodb';
import User from '../../model/schema';

connect();

export default async function handler(req, res) {
	const { email, password, category } = req.body;
	const user = await User.findOne({ email, password });

	if (!user) {
		return res.json({ status: 'Not able to find the user' });
	} else {
		if (category === 'student') res.redirect('/studentHome');
		if (category === 'teacher') res.redirect('/teacherHome');
	}
}
