-- Create table for Adventure Locations
create table adventures (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  latitude double precision not null,
  longitude double precision not null,
  media_url text,
  media_type text check (media_type in ('image', 'video'))
);

-- Enable RLS
alter table adventures enable row level security;

-- Policy: Everyone can read adventures
create policy "Enable read access for all users"
on adventures for select
using (true);

-- Policy: Only authenticated users (Younis) can insert/update/delete
-- Assuming Younis is the only authenticated user for admin tasks
create policy "Enable write access for authenticated users only"
on adventures for insert
with check (auth.role() = 'authenticated');

create policy "Enable update access for authenticated users only"
on adventures for update
using (auth.role() = 'authenticated');

create policy "Enable delete access for authenticated users only"
on adventures for delete
using (auth.role() = 'authenticated');

-- Insert some dummy data for initial map population
insert into adventures (title, description, latitude, longitude, media_url, media_type)
values 
('Home Base', 'Where the adventure begins!', 24.7136, 46.6753, '/younis-welcome.jpg', 'image'),
('Minecraft World', 'Found a rare biome here.', 24.7236, 46.6853, '/gallery/younis-miner.jpg', 'image');
