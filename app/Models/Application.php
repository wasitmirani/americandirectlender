<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;


    /**
     * Get all of the comments for the Application
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function agents()
    {
        return $this->hasMany(ApplicationAgents::class, 'application_id', 'id');
    }
    public function attachments()
    {
        return $this->hasMany(ApplicationAttachment::class, 'application_id', 'id');
    }
    public function comments()
    {
        return $this->hasMany(ApplicationComment::class, 'application_id', 'id');
    }

}