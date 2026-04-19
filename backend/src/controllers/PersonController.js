import prisma from '../lib/prisma.js';

const PersonController = {
  async create(req, res) {
    try {
      const { name, age, description, lastSeenLocation, contactInfo, photoUrl } = req.body;

      if (!name || !description || !lastSeenLocation || !contactInfo) {
        return res.status(400).json({ error: 'Por favor, preencha todos os campos obrigatórios para facilitar as buscas.' });
      }

      const newPerson = await prisma.person.create({
        data: {
          name,
          age: age ? parseInt(age) : null,
          description,
          lastSeenLocation,
          contactInfo,
          photoUrl,
          status: 'desaparecido'
        }
      });

      return res.status(201).json(newPerson);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Deu ruim ao salvar o registro.' });
    }
  },

  async listAll(req, res) {
    try {
      const people = await prisma.person.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
      return res.json(people);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar os dados.' });
    }
  },

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (status !== 'desaparecido' && status !== 'encontrado') {
        return res.status(400).json({ error: 'Status inválido. Use desaparecido ou encontrado.' });
      }

      const updatedPerson = await prisma.person.update({
        where: { id },
        data: { status }
      });

      return res.json(updatedPerson);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar o status.' });
    }
  }
};

export default PersonController;