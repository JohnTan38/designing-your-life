// components/MindsetSection.js

export default function MindsetSection() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-6">
        Growth Mindset vs. Fixed Mindset
      </h2>
      
      <div className="space-y-6">
        <div className="bg-red-500/20 border-l-4 border-red-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-red-300 mb-3">
            Dysfunctional Belief
          </h3>
          <p className="text-white/90 leading-relaxed">
            I am not good at math and I am never going to get better. There are a bunch of things I could not do, 
            and there are people who are far more talented than I am. I am stuck with my abilities and I cannot get better.
          </p>
        </div>

        <div className="bg-green-500/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Reframe</h3>
          <p className="text-white/90 leading-relaxed">
            With a growth mindset and a lot of hard work and practice, you can probably accomplish about anything 
            you set your mind to. Talent is not the reason other people are doing well, they are working hard to get better.
          </p>
        </div>
      </div>
    </div>
  );
}