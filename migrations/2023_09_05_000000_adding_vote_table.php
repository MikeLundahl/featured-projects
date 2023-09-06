<?php

/*
 * This file is part of mbl/featured-projects.
 *
 * Copyright (c) MADE By Lundahl.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('mbl_featured_projects_votes', function (Blueprint $table) {

    $table->increments('id');
    $table->integer('user_id')->unsigned()->nullable();
    $table->integer('discussion_id')->unsigned();
    $table->timestamps();

    $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');
    $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
});
