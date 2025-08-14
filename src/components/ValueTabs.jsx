function ValueTabs() {
  return (
    <div className="article-container px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Pourquoi faire ?</h2>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <div className="rounded-2xl bg-white shadow p-4 flex-1 min-w-[180px] mb-2 transition-shadow">
          <h3 className="rounded-xl bg-gray-100 px-3 py-1 inline-block text-base font-semibold mb-2">VOUS croyez en vos projets</h3>
          <p className="text-sm">Et je sais à quel point cela peut compter pour vous, pour éviter que le frein de la création d'un site Web puisse empiéter sur la création de votre projet</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-4 flex-1 min-w-[180px] mb-2 transition-shadow">
          <h3 className="rounded-xl bg-gray-100 px-3 py-1 inline-block text-base font-semibold mb-2">Rendre accessible la création de vos projets</h3>
          <p className="text-sm">Vous permettre de partager et mettre en forme vos idées pour vous, pour votre association, votre club, votre institution</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-4 flex-1 min-w-[180px] mb-2 transition-shadow">
          <h3 className="rounded-xl bg-gray-100 px-3 py-1 inline-block text-base font-semibold mb-2">Favoriser l'accès à des aides numériques</h3>
          <p className="text-sm">Dans un monde très digital, les précarités n'échappent pas à la précarité numérique. C'est pour cela qu'il est important de favoriser l'accès à des solutions d'aides Web qui existent ou qui vont exister ! 😉</p>
        </div>
      </div>
    </div>
  );
}

export default ValueTabs