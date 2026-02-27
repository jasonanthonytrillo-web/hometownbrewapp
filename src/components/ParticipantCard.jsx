import { useState, useEffect, useRef } from 'react'
import './ParticipantCard.css'

function ParticipantCard({ participants }) {
  const [loadingStates, setLoadingStates] = useState({})
  const imageRefs = useRef([])

  useEffect(() => {
    const initial = {}
    participants.forEach(p => initial[p.id] = true)
    setLoadingStates(initial)

    // Preload images using Image constructor for reliable loading detection
    participants.forEach(p => {
      const img = new Image()
      img.onload = () => {
        setLoadingStates(prev => ({ ...prev, [p.id]: false }))
      }
      img.onerror = () => {
        setLoadingStates(prev => ({ ...prev, [p.id]: false }))
      }
      img.src = p.image
    })

    // Fallback: hide shimmer after 3 seconds if image doesn't load
    const timeout = setTimeout(() => {
      setLoadingStates(prev => {
        const updated = { ...prev }
        participants.forEach(p => {
          if (updated[p.id]) updated[p.id] = false
        })
        return updated
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [participants])

  return (
    <div className="participant-card-container">
      {participants.map((participant, index) => (
        <div key={participant.id} className="participant-card">
          <div className="participant-image-container">
            {loadingStates[participant.id] && <div className="shimmer"></div>}
            <img
              ref={el => imageRefs.current[index] = el}
              src={participant.image}
              alt={participant.name}
              onLoad={() => setLoadingStates(prev => ({ ...prev, [participant.id]: false }))}
              onError={() => setLoadingStates(prev => ({ ...prev, [participant.id]: false }))}
              style={{ display: loadingStates[participant.id] ? 'none' : 'block' }}
            />
          </div>
          <div className="participant-info">
            <h3>{participant.name}</h3>
            <p>{participant.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ParticipantCard
