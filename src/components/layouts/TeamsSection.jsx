import React from 'react';
import { teamMembers } from '../../data/menu';

const TeamsSection = () => {
  return (
    <section className="bg-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Notre Équipe
        </h2>
        <p className="text-orange-100 text-center mb-12 max-w-2xl mx-auto">
          Derrière chaque plat, une équipe passionnée
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg group-hover:ring-orange-200 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-orange-100">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;